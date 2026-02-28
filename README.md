# QuickPal

AI-powered customer support chatbot built as a full-stack multi-tenant SaaS platform.  
Designed to be embeddable, scalable, and reusable for real-world production use.

---

## 🚀 Project Overview

QuickPal is built from scratch as a production-ready AI SaaS system.

It includes:

- An embeddable chat widget (script/tag based)
- Multi-tenant SaaS architecture (multiple websites, multiple users)
- Authentication & organization management using Scalekit
- Secure storage of chats, users, and configurations in MongoDB
- Modern dashboard built with Next.js App Router
- Deployment-ready architecture using Vercel
- Fully reusable for clients or your own SaaS product

This project is designed to simulate and build a real-world AI SaaS product.

---

## ✨ Core Features

- Lightweight embeddable JavaScript widget
- AI-powered conversational responses
- Multi-tenant organization system
- Role-based authentication
- Secure chat storage
- Owner-based chatbot isolation
- Dashboard to manage configurations
- Modern responsive UI
- Production-ready deployment setup

---

## 🛠 Tech Stack Used

**Frontend & Dashboard**
- Next.js (App Router)
- React
- Tailwind CSS
- shadcn UI
- Motion animations

**Database**
- MongoDB

**Authentication & Organizations**
- Scalekit (Auth + Organization management)

**AI Integration**
- LLM-based AI response generation

**Deployment**
- Vercel

---

## 🏗 Architecture Overview

QuickPal follows a multi-tenant SaaS model.

### Multi-Tenant Design

Each organization:
- Has its own users
- Has its own chatbot configuration
- Has isolated chat history
- Has a unique `ownerId` for embedding

This ensures complete separation between clients.

---

## 🔌 Embeddable Chat Widget

The chatbot can be embedded into any website using a simple script tag.

```html
<script
  src="https://your-domain.com/chatbot.js"
  data-owner-id="YOUR_OWNER_ID">
</script>
```

The widget:
- Injects itself into the page
- Connects securely to backend APIs
- Loads configuration dynamically
- Stores conversations in MongoDB

---

## ⚛ Next.js Integration Example

```javascript
import { useEffect } from "react";

export default function EmbedChat({ ownerId }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `${process.env.NEXT_PUBLIC_APP_URL}/chatbot.js`;
    script.setAttribute("data-owner-id", ownerId);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [ownerId]);

  return null;
}
```

---

## 🔐 Authentication & Organizations (Scalekit)

QuickPal uses Scalekit to:

- Authenticate users securely
- Manage organizations
- Assign users to organizations
- Control access to chatbot configurations
- Enable SaaS-level multi-user management

---

## 🌍 Deployment

QuickPal is fully deployable using Vercel.

Deployment includes:

- Frontend dashboard
- Backend API routes
- Serverless AI endpoints
- Secure environment variables
- Production-ready build setup

---

## 💡 Use Cases

QuickPal is ideal for:

- SaaS customer support
- Startup & landing pages
- E-commerce websites
- Portfolio & business websites
- Agency client projects

---

## 🔒 Security Highlights

- Organization-level data isolation
- Token-based authentication
- Secure API routes
- Server-side validation
- Production deployment best practices

---

## 📈 Future Improvements

- AI analytics dashboard
- Chat insights & reporting
- Multi-language support
- Custom AI training
- Webhook integrations
- White-label support
- Subscription billing integration

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---

## ⭐ Support

If you find QuickPal useful, consider giving it a star on GitHub.
It helps the project grow and reach more developers.
