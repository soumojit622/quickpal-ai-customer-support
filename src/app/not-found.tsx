import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  IconAlertTriangle,
  IconArrowLeft,
  IconHeadset,
  IconHome,
  IconSearch,
  IconHelpCircle,
} from "@tabler/icons-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* 404 Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <h1 className="text-[220px] sm:text-[320px] font-semibold tracking-[-0.05em] text-foreground/5 select-none blur-[1px]">
          404
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* Brand */}
        <div className="mb-6 text-sm text-muted-foreground font-medium tracking-wide">
          QuickPal Support
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 text-sm font-medium text-muted-foreground mb-6 backdrop-blur-sm">
          <IconAlertTriangle size={16} />
          404 · Page Not Found
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-5">
          The page you’re looking for doesn’t exist
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mb-10">
          It may have been moved, deleted, or the link might be incorrect.
          You can search below or navigate back to continue.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-12">
          <IconSearch
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search documentation or pages..."
            className="pl-11 h-11 shadow-sm"
          />
        </div>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button asChild size="lg" className="shadow-sm">
            <Link href="/">
              <IconHome size={18} className="mr-2" />
              Back to Home
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <IconHeadset size={18} className="mr-2" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Secondary Links */}
        <div className="border-t border-border pt-6 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/docs"
              className="inline-flex items-center hover:text-foreground transition-colors"
            >
              <IconHelpCircle size={16} className="mr-2" />
              Documentation
            </Link>

            <Link
              href="/"
              className="inline-flex items-center hover:text-foreground transition-colors"
            >
              <IconArrowLeft size={16} className="mr-2" />
              Return to Dashboard
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;