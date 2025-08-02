# Email Setup Guide for Contact Form

## Option 1: Formspree (Recommended - Free & Easy)

### Step 1: Sign up for Formspree

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### Step 2: Get your Form ID

1. After creating a form, you'll get a form ID (looks like: `xpznvqrw`)
2. Your form endpoint will be: `https://formspree.io/f/xpznvqrw`

### Step 3: Update the Contact Component

1. Open `src/components/Contact.tsx`
2. Replace `'https://formspree.io/f/your-form-id'` with your actual form endpoint
3. Example: `'https://formspree.io/f/xpznvqrw'`

### Step 4: Configure Formspree (Optional)

- Set up email notifications in your Formspree dashboard
- Configure spam protection
- Set up custom thank you page

---

## Option 2: EmailJS (Alternative)

### Step 1: Sign up for EmailJS

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)

### Step 2: Install EmailJS

```bash
npm install @emailjs/browser
```

### Step 3: Get your credentials

- Service ID
- Template ID
- Public Key

### Step 4: Update Contact Component

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "YOUR_PUBLIC_KEY"
    );

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 3: Netlify Forms (If hosting on Netlify)

### Step 1: Add netlify attribute to form

```typescript
<form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of your form */}
</form>
```

### Step 2: Update handleSubmit

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", formData.name);
    formData.append("email", formData.email);
    formData.append("message", formData.message);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    setIsSubmitted(true);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Recommended: Use Formspree

**Why Formspree?**

- ✅ Free tier available
- ✅ No backend needed
- ✅ Easy setup
- ✅ Spam protection
- ✅ Email notifications
- ✅ Works with static sites

**Steps to implement:**

1. Sign up at formspree.io
2. Create a form
3. Replace `your-form-id` in Contact.tsx with your actual form ID
4. Deploy your site
5. Test the contact form

**That's it! Your contact form will start working immediately.**
