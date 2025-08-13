import Link from "next/link";
import { Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Daniel Sun
            </h3>
            <p className="text-sm text-muted-foreground">
              MIT Computer Science graduate passionate about building impactful
              projects and helping people become better problem solvers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Me
              </Link>

              <Link
                href="/resume"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/daniel-sun-440493171/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/DanielS99540544"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:daniel@mathdash.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daniel Sun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
