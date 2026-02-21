import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';


const GMAIL_USER = process.env['GMAIL_USER'] || '';
const GMAIL_APP_PASS = process.env['GMAIL_APP_PASS'] || '';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASS,
  },
});

interface ContactBody {
  name: string;
  email: string;
  interest: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  if (!GMAIL_USER || !GMAIL_APP_PASS) {
    console.error('GMAIL_USER ou GMAIL_APP_PASS non configuré');
    return res.status(500).json({ error: 'Configuration email serveur manquante.' });
  }

  const { name, email, interest, message } = req.body as ContactBody;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants (nom, email, message).' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return res.status(400).json({ error: 'Un ou plusieurs champs dépassent la taille maximale.' });
  }

  const interestLabels: Record<string, string> = {
    pilates: 'Pilates Mat',
    reformer: 'Pilates Reformer',
    mobility: 'Mobilité',
    crossfit: 'CrossFit',
    general: 'Demande générale',
  };

  const interestLabel = interestLabels[interest] || interest || 'Non précisé';

  try {
    await transporter.sendMail({
      from: `"Les Étoiles d'Aurore — Contact" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      replyTo: email,
      subject: `✨ Nouveau message de ${name} — ${interestLabel}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #39645c; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">✨ Nouveau message de contact</h1>
          </div>
          <div style="background: #ffffff; padding: 32px; border: 1px solid #e2edeb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f3; color: #6b7280; font-size: 14px; width: 120px;">Nom</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f3; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f3; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f3;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #56bdba; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f3; color: #6b7280; font-size: 14px;">Intérêt</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f4f3;">${escapeHtml(interestLabel)}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">Message :</p>
              <div style="background: #f5f8f7; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</div>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
              Envoyé depuis le formulaire de contact du site lesetoilesdaurore.fr
            </p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erreur envoi email:', err);
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
  }
}
