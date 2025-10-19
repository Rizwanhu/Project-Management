export interface UploadedFile {
  file: File;
  content: string;
  type: string;
  name: string;
  size: number;
}

export const SUPPORTED_FILE_TYPES = [
  'text/plain',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'text/csv',
  'application/json',
  'text/markdown'
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const validateFile = (file: File): { isValid: boolean; error?: string } => {
  if (file.size > MAX_FILE_SIZE) {
    return { isValid: false, error: 'File size must be less than 10MB' };
  }

  if (!SUPPORTED_FILE_TYPES.includes(file.type)) {
    return { isValid: false, error: 'Unsupported file type. Please upload a text, PDF, Word, Excel, PowerPoint, CSV, JSON, or Markdown file.' };
  }

  return { isValid: true };
};

export const readFileContent = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target?.result as string;
      resolve(content);
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    // Handle different file types
    if (file.type === 'text/plain' || 
        file.type === 'text/csv' || 
        file.type === 'text/markdown' ||
        file.type === 'application/json') {
      reader.readAsText(file);
    } else if (file.type === 'application/pdf') {
      // For PDF files, we'll read as text (basic extraction)
      reader.readAsText(file);
    } else {
      // For other file types, try to read as text
      reader.readAsText(file);
    }
  });
};

export const processUploadedFile = async (file: File): Promise<UploadedFile> => {
  const validation = validateFile(file);
  if (!validation.isValid) {
    throw new Error(validation.error);
  }

  const content = await readFileContent(file);
  
  return {
    file,
    content,
    type: file.type,
    name: file.name,
    size: file.size
  };
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const getFileIcon = (fileType: string): string => {
  if (fileType.includes('pdf')) return '📄';
  if (fileType.includes('word') || fileType.includes('document')) return '📝';
  if (fileType.includes('excel') || fileType.includes('spreadsheet')) return '📊';
  if (fileType.includes('powerpoint') || fileType.includes('presentation')) return '📈';
  if (fileType.includes('text') || fileType.includes('markdown')) return '📄';
  if (fileType.includes('json')) return '🔧';
  if (fileType.includes('csv')) return '📋';
  return '📎';
};
