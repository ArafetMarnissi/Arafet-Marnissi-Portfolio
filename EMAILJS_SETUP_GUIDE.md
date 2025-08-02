# EmailJS Setup Guide - FREE Email Solution

EmailJS allows you to send emails directly from your frontend without a backend server. **Free tier includes 200 emails per month** - perfect for portfolio contact forms!

## 🆓 Why EmailJS?

- ✅ **Completely FREE** (200 emails/month)
- ✅ **No backend required** - works from frontend
- ✅ **Easy setup** - 5 minutes configuration
- ✅ **Multiple email providers** - Gmail, Outlook, Yahoo, etc.
- ✅ **Custom templates** - Professional email formatting

## 📋 Step-by-Step Setup

### 1. Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - **Yahoo Mail**
   - Or any custom SMTP
4. Connect your email account
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template

1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}}

Hello Jihed,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy the Template ID** (you'll need this)

### 4. Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)
3. **Copy the Public Key** (you'll need this)

### 5. Update Your Code

Replace these values in `src/components/Contact.tsx`:

```typescript
const EMAILJS_SERVICE_ID = "your_service_id"; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "your_template_id"; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key"; // Replace with your Public Key
```

## 🔧 Configuration Example

Here's what your configuration should look like:

```typescript
// Example (replace with your actual IDs)
const EMAILJS_SERVICE_ID = "service_abc123";
const EMAILJS_TEMPLATE_ID = "template_xyz789";
const EMAILJS_PUBLIC_KEY = "user_def456";
```

## 🧪 Testing

1. Save your changes
2. Test the contact form on your website
3. Check your email inbox for the message
4. Verify the EmailJS dashboard shows the email was sent

## 📊 Free Tier Limits

- ✅ **200 emails/month** (resets monthly)
- ✅ **2 email services**
- ✅ **3 email templates**
- ✅ **Email support**

Perfect for portfolio websites! If you need more, paid plans start at $15/month.

## 🛠️ Alternative Free Solutions

If you prefer other options:

### Option 2: Netlify Forms (if hosting on Netlify)

- Free tier: 100 submissions/month
- Add `netlify` attribute to your form
- No JavaScript required

### Option 3: Getform.io

- Free tier: 50 submissions/month
- Simple form endpoint
- Easy integration

### Option 4: Web3Forms

- Completely free (unlimited)
- Just need API key
- No registration required

## 🚀 Deploy and Enjoy!

Once configured, your contact form will:

- ✅ Send emails directly to your inbox
- ✅ Work from any frontend hosting (Vercel, Netlify, etc.)
- ✅ Handle errors gracefully with nice UI feedback
- ✅ Show success/error messages to visitors

**No backend server needed!** 🎉
