# Multilingual Implementation Instructions

This document outlines the internationalization and translation handling in our Next.js app, as well as the rules to follow when implementing new components.

## Translation System Overview

1. **Translation Files**
   - Stored in JSON format in the `locales` directory
   - Separate directories for each supported language (e.g., `en` and `fr`)
   - Each feature or component typically has its own translation file (e.g., `common.json`, `hero.json`, `features.json`)

2. **Language Context**
   - Managed by `LanguageContext` (defined in `contexts/LanguageContext.tsx`)
   - Provides current language and translation functions

3. **Language Provider**
   - `LanguageProvider` component wraps the app in the root layout
   - Provides language-related functionality to all child components

4. **Accessing Translations**
   - Components use the `useLanguage` hook to access current language and translation function
   - The `t` function retrieves translations based on keys

5. **Language Selector**
   - `LanguageSelector` component allows users to switch between languages

6. **Routing**
   - Uses dynamic routes with locale parameters (e.g., `[locale]`)
   - Middleware redirects users to their preferred language

## Rules for Implementing New Components

1. Always use the `useLanguage` hook to access translations:
   ```typescript
   const { t } = useLanguage();
   ```

2. Use the `t` function to retrieve translations, providing the appropriate key:
   ```typescript
   t('componentName.translationKey')
   ```

3. Create corresponding translation files in both `locales/en` and `locales/fr` directories for new components.

4. Use nested objects in translation files for better organization:
   ```json
   {
     "componentName": {
       "title": "Title",
       "description": "Description"
     }
   }
   ```

5. For dynamic content, use interpolation in translation strings:
   ```json
   {
     "greeting": "Hello, {{name}}!"
   }
   ```
   And in the component:
   ```typescript
   t('greeting', { name: userName })
   ```

6. For lists or arrays in translations, use the `returnObjects` option:
   ```typescript
   const items = t('componentName.items', { returnObjects: true }) as string[];
   ```

7. Ensure all user-facing strings are translatable, including button texts, labels, and error messages.

8. When adding new routes, follow the `[locale]` structure in the `app` directory.

9. Use the `Language` type when working with language codes:
   ```typescript
   import { Language } from '../locales/translations';
   ```

By following these rules, you'll maintain consistency in internationalization across the app and ensure all new components are properly translated.
