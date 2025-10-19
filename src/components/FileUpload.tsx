import React, { useCallback, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, X, FileText, CheckCircle } from 'lucide-react';
import { UploadedFile, processUploadedFile, formatFileSize, getFileIcon } from '@/utils/fileUploadUtils';
import { toast } from 'sonner';

interface FileUploadProps {
  onFileUpload: (file: UploadedFile | null) => void;
  uploadedFile: UploadedFile | null;
  disabled?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, uploadedFile, disabled = false }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFile = useCallback(async (file: File) => {
    if (disabled) return;

    setIsProcessing(true);
    try {
      const processedFile = await processUploadedFile(file);
      onFileUpload(processedFile);
      toast.success('File uploaded successfully');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to upload file');
    } finally {
      setIsProcessing(false);
    }
  }, [onFileUpload, disabled]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile, disabled]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const removeFile = useCallback(() => {
    onFileUpload(null);
    toast.success('File removed');
  }, [onFileUpload]);

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <Card 
        className={`border-2 border-dashed transition-colors ${
          isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : uploadedFile 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-300 hover:border-gray-400'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <CardContent className="p-6">
          <div className="text-center">
            {uploadedFile ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">File Uploaded Successfully</h3>
                  <p className="text-sm text-gray-600">Your file is ready for AI analysis</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Upload className={`h-12 w-12 ${isDragOver ? 'text-blue-500' : 'text-gray-400'}`} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {isDragOver ? 'Drop your file here' : 'Upload Project Document'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Drag and drop a file here, or click to select
                  </p>
                </div>
              </div>
            )}
            
            {!uploadedFile && (
              <div className="mt-4">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileInput}
                  accept=".txt,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.json,.md"
                  disabled={disabled}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  disabled={disabled || isProcessing}
                  className="mt-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* File Info */}
      {uploadedFile && (
        <Card className="border border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{getFileIcon(uploadedFile.type)}</div>
                <div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">{uploadedFile.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary" className="text-xs">
                      {formatFileSize(uploadedFile.size)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {uploadedFile.type.split('/')[1].toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={removeFile}
                disabled={disabled}
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Supported File Types */}
      {!uploadedFile && (
        <div className="text-xs text-gray-500 text-center">
          <p>Supported formats: PDF, Word, Excel, PowerPoint, Text, CSV, JSON, Markdown</p>
          <p>Maximum file size: 10MB</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
