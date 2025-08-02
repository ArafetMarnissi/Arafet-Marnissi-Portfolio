#!/bin/bash

# Formspree Setup Script for Neural Canvas Portfolio
echo "🚀 Setting up your contact form with Formspree..."
echo ""

echo "📋 Follow these simple steps:"
echo ""

echo "1️⃣  Go to https://formspree.io and sign up (free)"
echo "2️⃣  Click 'Create a new form'"
echo "3️⃣  Choose a form name (e.g., 'Portfolio Contact')"
echo "4️⃣  Copy your form ID (looks like: 'xpznvqrw')"
echo ""

echo "5️⃣  Open src/components/Contact.tsx"
echo "6️⃣  Find line ~46: const FORMSPREE_ID = 'your-form-id';"
echo "7️⃣  Replace 'your-form-id' with your actual ID"
echo ""

echo "✅ That's it! Your contact form will be functional!"
echo ""

echo "🎯 Example:"
echo "Before: const FORMSPREE_ID = 'your-form-id';"
echo "After:  const FORMSPREE_ID = 'xpznvqrw';"
echo ""

echo "🔧 Optional Formspree settings:"
echo "- Enable email notifications"
echo "- Set up spam protection"
echo "- Customize confirmation message"
echo ""

echo "💡 The form currently works in demo mode showing all submitted data"
echo "📧 Once you add your Formspree ID, emails will be sent to your inbox!"
