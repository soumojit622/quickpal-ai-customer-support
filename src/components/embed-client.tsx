"use client"
import {
    IconChecklist,
    IconCode,
    IconCopy,
    IconExternalLink,
    IconPlug,
    IconSend,
    IconSettings,
    IconShieldCheck,
    IconX,
} from "@tabler/icons-react"
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'
import { ModeToggle } from "./mode-toggle"
export default function EmbedClient({ ownerId }: { ownerId: string | undefined }) {
    const [copied, setCopied] = useState(false)

    const embedCode = `
<!-- AI Chatbot Embed Script -->
<script
  src="${process.env.NEXT_PUBLIC_APP_URL}/chatbot.js"
  data-owner-id="${ownerId}"
  defer
></script>
`.trim();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className='min-h-screen'>
            {/* UPPER CONTENT */}
            <div className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/40 supports-backdrop-filter:bg-background/60">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 group select-none"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-muted/40 border border-border/60 transition-all duration-300 group-hover:shadow-sm">
                            <Image
                                src="/logo.svg"
                                alt="QuickPal Logo"
                                width={22}
                                height={22}
                                priority
                                className="transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col leading-tight">
                            <div className="flex items-baseline">
                                <span className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                                    Quick
                                </span>
                                <span className="text-[18px] font-semibold tracking-[-0.02em] text-primary">
                                    Pal
                                </span>
                            </div>

                            <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-medium">
                                AI Customer Support Platform
                            </span>
                        </div>
                    </Link>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        <ModeToggle />

                        <Button variant="outline" asChild>
                            <Link href="/dashboard">Back To Dashboard</Link>
                        </Button>
                    </div>

                </div>
            </div>
            {/* MAIN CONTENT */}
            <div className="flex justify-center px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="w-full max-w-5xl space-y-14"
                >
                    {/* HEADER */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            <IconPlug size={14} />
                            Integration
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-3">
                                <IconCode size={26} className="text-primary" />
                                Embed Your Chatbot
                            </h1>

                            <p className="text-sm text-muted-foreground max-w-xl">
                                Add the script below to your website to activate your AI support
                                assistant. Place it right before the{" "}
                                <code className="bg-muted px-1.5 py-0.5 text-xs rounded">
                                    &lt;/body&gt;
                                </code>{" "}
                                tag.
                            </p>
                        </div>
                    </div>

                    {/* EMBED CODE CARD */}
                    <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/40">
                            <div className="space-y-1">
                                <p className="text-sm font-medium flex items-center gap-2">
                                    <IconCode size={16} />
                                    Embed Script
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Copy and paste into your website
                                </p>
                            </div>

                            <Button
                                size="sm"
                                onClick={copyToClipboard}
                                variant="secondary"
                                className="rounded-lg flex items-center gap-2"
                            >
                                <IconCopy size={16} />
                                {copied ? "Copied" : "Copy Code"}
                            </Button>
                        </div>

                        <div className="p-6 bg-muted/30">
                            <pre className="text-xs overflow-x-auto bg-background border rounded-lg p-4">
                                <code>{embedCode}</code>
                            </pre>
                        </div>
                    </div>

                    {/* GUIDELINES */}
                    <div className="rounded-xl border bg-card p-8 shadow-sm space-y-6">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <IconChecklist size={20} className="text-primary" />
                            Integration Guidelines
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
                            <div className="space-y-2">
                                <p className="font-medium text-foreground flex items-center gap-2">
                                    <IconCode size={16} className="text-primary" />
                                    Placement
                                </p>
                                <p>
                                    Insert the script inside your HTML file before the{" "}
                                    <code className="bg-muted px-1 py-0.5 text-xs rounded">
                                        &lt;/body&gt;
                                    </code>{" "}
                                    closing tag.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-medium text-foreground flex items-center gap-2">
                                    <IconShieldCheck size={16} className="text-primary" />
                                    Domain Whitelisting
                                </p>
                                <p>
                                    Ensure your website domain is added in the dashboard security
                                    settings.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-medium text-foreground flex items-center gap-2">
                                    <IconSettings size={16} className="text-primary" />
                                    Customization
                                </p>
                                <p>
                                    Configure appearance, tone, and behavior from your chatbot
                                    settings panel.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="font-medium text-foreground flex items-center gap-2">
                                    <IconChecklist size={16} className="text-primary" />
                                    Testing
                                </p>
                                <p>
                                    Verify the chatbot loads correctly and responds as expected on your
                                    live site.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PREVIEW */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <IconExternalLink size={18} className="text-primary" />
                                Live Preview
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Example of how the chatbot will appear on your website.
                            </p>
                        </div>

                        <div className="rounded-xl border bg-background shadow-md overflow-hidden">
                            {/* Browser Header */}
                            <div className="flex items-center gap-3 px-5 py-3 border-b bg-muted/40">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-500" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <span className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <div className="ml-4 text-xs text-muted-foreground">
                                    https://your-website.com
                                </div>
                            </div>

                            {/* Website Area */}
                            <div className="relative h-115 bg-muted/20 flex items-center justify-center text-muted-foreground text-sm">
                                {/* Website content area */}

                                {/* Chat Widget */}
                                <div className="absolute bottom-8 right-8 w-[320px] rounded-2xl border bg-card shadow-xl flex flex-col overflow-hidden">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-4 py-3 border-b bg-primary text-primary-foreground">
                                        <span className="text-sm font-medium flex items-center gap-2">
                                            <IconPlug size={16} />
                                            Customer Support
                                        </span>
                                        <IconX className="w-4 h-4 opacity-80 cursor-pointer" />
                                    </div>

                                    {/* Messages */}
                                    <div className="flex-1 p-4 space-y-3 bg-muted/30">
                                        <div className="text-xs bg-background border px-3 py-2 rounded-xl w-fit max-w-[80%]">
                                            Hello, how can I assist you today?
                                        </div>

                                        <div className="text-xs bg-primary text-primary-foreground px-3 py-2 rounded-xl ml-auto w-fit max-w-[80%]">
                                            What is your return policy?
                                        </div>
                                    </div>

                                    {/* Input Area */}
                                    <div className="border-t bg-background p-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 flex items-center bg-muted rounded-xl px-3">
                                                <input
                                                    type="text"
                                                    placeholder="Type your message..."
                                                    className="flex-1 bg-transparent py-2 text-xs outline-none placeholder:text-muted-foreground"
                                                    disabled
                                                />
                                            </div>

                                            <Button
                                                size="icon"
                                                className="rounded-xl h-9 w-9"
                                                disabled
                                            >
                                                <IconSend size={16} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
