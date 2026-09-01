import LegalLayout, { LegalSection } from '../../components/LegalLayout'

const CONTACT_EMAIL = 'hello@xeurotech.com'
const CONTACT_PHONE = '+92 303 8143000'

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains what information AI Outfit Planner collects, why, and how it's used. AI Outfit Planner is a product of XeuroTech."
      lastUpdated="August 2026"
    >
      <LegalSection title="1. Who this policy covers">
        <p>
          This Privacy Policy applies to AI Outfit Planner (the "App"), built and operated by
          XeuroTech ("XeuroTech", "we", "us", or "our"). It describes our practices for the mobile
          app across iOS and Android.
        </p>
      </LegalSection>

      <LegalSection title="2. Information you provide to us">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink-soft">Account information:</span> when you
            create an account, we collect your email address, a password (handled securely via
            Firebase Authentication — we never see or store your password in plain text), and an
            optional display name.
          </li>
          <li>
            <span className="font-medium text-ink-soft">Clothing and profile photos:</span> photos
            you take with your camera or choose from your photo library to add items to your
            digital closet, plus an optional profile picture. These images are uploaded to
            Cloudinary, our image-hosting provider, so they can be displayed back to you in the
            App.
          </li>
          <li>
            <span className="font-medium text-ink-soft">Wardrobe and planning data:</span>{' '}
            information you enter about your clothing (category, color, tags), outfits you save,
            events you schedule in the Style Planner, and messages you send to the AI Stylist
            chat. This is stored in Firestore, our cloud database, tied to your account.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Information collected through device permissions">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink-soft">Camera and photo library:</span> requested
            only when you choose to add a clothing item or profile photo. You can decline and use
            the App with manually described items instead, though the closet experience works
            best with photos.
          </li>
          <li>
            <span className="font-medium text-ink-soft">Location:</span> requested only if you
            want weather-based outfit tips. If you decline, or if location is unavailable, the App
            falls back to an approximate location based on your network connection, or simply
            skips weather-aware suggestions.
          </li>
          <li>
            <span className="font-medium text-ink-soft">Notifications:</span> with your
            permission, we send local and push notifications for things like planner reminders
            ahead of a scheduled event. You can disable these at any time in your device settings.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Information stored only on your device">
        <p>
          Some data — such as your calendar/planner event list, favorited outfits, and whether
          you've already generated an outfit today — is cached locally on your device using
          on-device storage (AsyncStorage) to make the App feel fast and to work offline. This
          local data is not something we can access remotely; it's cleared if you uninstall the
          App or clear its storage.
        </p>
      </LegalSection>

      <LegalSection title="5. How AI features process your data">
        <p>
          To generate outfit recommendations, power the AI Stylist chat, and create Virtual Try-On
          images, the App sends relevant data to third-party AI providers for processing:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-ink-soft">Google Gemini:</span> used to analyze
            your closet items and generate outfit combinations, reasoning, and (for Virtual
            Try-On) portions of the image-generation pipeline.
          </li>
          <li>
            <span className="font-medium text-ink-soft">OpenAI (image generation):</span> used to
            help generate the Virtual Try-On image of an outfit.
          </li>
          <li>
            <span className="font-medium text-ink-soft">Groq (running Llama models):</span> used
            to power the conversational AI Stylist chat.
          </li>
        </ul>
        <p>
          These providers process the data (such as clothing images or chat text) we send them
          strictly to return a result to the App, under their own respective privacy and data-use
          terms. We do not sell this data, and we work to send only what each feature needs to
          function.
        </p>
      </LegalSection>

      <LegalSection title="6. Payments">
        <p>
          Premium subscriptions are purchased and billed through Google Play Billing. XeuroTech
          does not receive or store your card or payment details — those are handled entirely by
          Google Play. We receive confirmation of your subscription status so the App can unlock
          Premium features for your account.
        </p>
      </LegalSection>

      <LegalSection title="7. How we use your information">
        <ul className="list-disc space-y-2 pl-5">
          <li>To operate core features: your digital closet, AI outfit generation, the stylist chat, planning, and analytics.</li>
          <li>To personalize suggestions based on your wardrobe, stated preferences, and (if enabled) local weather.</li>
          <li>To maintain your account, including authentication and syncing your data across sessions.</li>
          <li>To send planner reminders and service-related notifications you've opted into.</li>
          <li>To maintain and improve the App's reliability, and to detect and prevent misuse.</li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Data sharing">
        <p>
          We do not sell your personal information. We share data only with the service providers
          described above (Firebase, Cloudinary, Google Gemini, OpenAI, Groq, Google Play
          Billing) as needed to run the App's features, or where required by law.
        </p>
      </LegalSection>

      <LegalSection title="9. Data retention and deletion">
        <p>
          We retain your account and wardrobe data for as long as your account is active. You can
          delete individual closet items, saved outfits, and chat sessions directly in the App. To
          request full deletion of your account and associated data, contact us using the details
          below — we'll process deletion requests within a reasonable timeframe, subject to any
          data we're legally required to retain.
        </p>
      </LegalSection>

      <LegalSection title="10. Children's privacy">
        <p>
          AI Outfit Planner is not directed at children and is not intended for use by anyone
          under 13 years old (or the applicable minimum age of digital consent in your country,
          such as 16 in parts of the European Economic Area). We do not knowingly collect
          information from children below that age. If you believe a child has provided us with
          personal information, please contact us so we can remove it.
        </p>
      </LegalSection>

      <LegalSection title="11. Your choices and rights">
        <ul className="list-disc space-y-2 pl-5">
          <li>You can review and edit your profile information from within the App.</li>
          <li>You can revoke camera, photo library, location, or notification permissions at any time in your device settings.</li>
          <li>You can delete individual wardrobe items, outfits, or chat history from within the App.</li>
          <li>You can request access to, correction of, or deletion of your personal data by contacting us.</li>
          <li>Depending on your location, you may have additional rights under laws such as the GDPR or CCPA — contact us to make a request.</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Security">
        <p>
          We rely on industry-standard providers (Firebase and Cloudinary) with their own security
          safeguards to store account and wardrobe data, and we limit access to what each feature
          needs. No method of transmission or storage is 100% secure, and we can't guarantee
          absolute security.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to this policy">
        <p>
          We may update this Privacy Policy as the App evolves. We'll update the "Last updated"
          note above when we do, and where changes are significant, we'll make a reasonable
          effort to notify users within the App.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact us">
        <p>
          Questions about this Privacy Policy or your data? Reach us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink underline decoration-violet/40 underline-offset-2 hover:text-violet">
            {CONTACT_EMAIL}
          </a>{' '}
          or{' '}
          <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, '')}`} className="font-semibold text-ink underline decoration-violet/40 underline-offset-2 hover:text-violet">
            {CONTACT_PHONE}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
