#!/bin/bash

# EmailJS Contact Form Setup Script
# This script helps you set up EmailJS for free email sending

echo "🚀 Setting up EmailJS for your portfolio contact form..."
echo ""

echo "📋 What you need to do:"
echo ""
echo "1. 📧 Sign up at https://www.emailjs.com/ (FREE - 200 emails/month)"
echo "2. 🔗 Connect your email service (Gmail, Outlook, etc.)"
echo "3. 📝 Create an email template"
echo "4. 🔑 Get your Service ID, Template ID, and Public Key"
echo "5. ✏️  Update the IDs in src/components/Contact.tsx"
echo ""

echo "🔧 Current configuration in Contact.tsx:"
echo "   const EMAILJS_SERVICE_ID = 'your_service_id';"
echo "   const EMAILJS_TEMPLATE_ID = 'your_template_id';"
echo "   const EMAILJS_PUBLIC_KEY = 'your_public_key';"
echo ""

echo "📖 For detailed instructions, see EMAILJS_SETUP_GUIDE.md"
echo ""

echo "💡 Why EmailJS?"
echo "   ✅ Completely FREE (200 emails/month)"
echo "   ✅ No backend server needed"
echo "   ✅ Works with any frontend hosting"
echo "   ✅ Easy 5-minute setup"
echo ""

echo "🆚 Alternative FREE solutions:"
echo "   • Web3Forms (unlimited, no signup)"
echo "   • Getform.io (50 emails/month)"
echo "   • Netlify Forms (100 submissions/month)"
echo ""

echo "🎯 Once configured, your contact form will send emails directly to your inbox!"
echo ""

# Check if user wants to open the setup guide
read -p "📖 Would you like to open the setup guide? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    if command -v code &> /dev/null
    then
        code EMAILJS_SETUP_GUIDE.md
        echo "📝 Setup guide opened in VS Code!"
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        start EMAILJS_SETUP_GUIDE.md
        echo "📝 Setup guide opened!"
    else
        echo "📝 Please open EMAILJS_SETUP_GUIDE.md manually"
    fi
fi

echo ""
echo "🚀 Happy coding! Your portfolio contact form will be awesome!"
