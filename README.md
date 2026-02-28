# QuickPal

AI-powered customer support chatbot that can be embedded into any website with a single script tag.  
Built for speed, simplicity, and seamless integration.

---

## 🚀 Overview

QuickPal helps businesses add an intelligent support assistant to their website in minutes.

It provides:
- Instant AI-driven responses
- Reduced customer support workload
- Improved user engagement
- Seamless integration across platforms

Whether you use plain HTML, React, Next.js, or a CMS platform, QuickPal integrates effortlessly.

---

## ✨ Features

- Lightweight embeddable script
- AI-powered conversational responses
- Fast and responsive UI
- Easy integration (HTML, React, Next.js, WordPress)
- Owner-based chatbot configuration
- Secure authentication
- Scalable backend architecture
- Modern UI with smooth animations

---

## 🛠 Tech Stack

**Frontend**
- Next.js
- React
- Tailwind CSS
- shadcn UI
- Motion
- Lucide Icons

**Backend**
- Node.js
- Express

**Database**
- MongoDB

---

## 📌 How It Works

1. Website owner registers on QuickPal.
2. A unique `ownerId` is generated.
3. Owner embeds a small script into their website.
4. The chatbot loads automatically and connects securely to the backend.
5. Visitors can start chatting instantly.

---

## 🔌 Embedding QuickPal

Add this script to your website:

```html
<script 
  src="https://your-domain.com/chatbot.js" 
  data-owner-id="YOUR_OWNER_ID">
</script>
```

Place it just before the closing `</body>` tag.

Once added, the chatbot will automatically initialize and attach to your site.

---

## ⚛ React / Next.js Integration Example

```javascript
import { useEffect } from "react";

useEffect(() => {
  const script = document.createElement("script");
  script.src = `${process.env.NEXT_PUBLIC_APP_URL}/chatbot.js`;
  script.setAttribute("data-owner-id", ownerId);
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);
```

---

## 🔐 Security

- Owner-based chatbot isolation
- Token-based authentication
- Environment-based configuration
- Production-ready secure deployment

---

## 📈 Roadmap

- Analytics dashboard
- Multi-language support
- AI training customization
- Webhook integrations
- Role-based access control
- White-label support

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you find QuickPal useful, consider giving it a star on GitHub.  
It helps the project grow and reach more developers.

---

## 👨‍💻 Author

Built with focus on performance, clean architecture, and developer experience.
