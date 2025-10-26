import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            Developed by [Rizwan Hussain - Afrazia Umer - Faseeha Noor] | Prototype for Academic Project
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rizwanhu/Project-Management"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="mailto:rizwanhu140@gmail.com"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
