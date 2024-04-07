import { currentUser } from '~/lib/auth';
import { SettingsMain } from '~/app/(app)/settings/settings-main';
import { getUserApiTokens } from '~/db';
import { ApiTokenEditor } from './api-token-editor';

const AVAILABLE_TOKENS = [
  {
    title: "OpenAI API Key",
    name: "OPENAI_API_KEY",
    description: "Used to make calls to the OpenAI API on your behalf",
  }
]

const obfuscateToken = (token: string) => {
  return token.slice(0, 4) + '...' + token.slice(-4);
}

export default async function SettingsTokensPage() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // Fetch the user's api tokens
  const apiTokens = await getUserApiTokens(user.id);

  // Turn the api tokens into a map and obfuscate the token values
  const apiTokenMap = apiTokens.reduce((acc, token) => {
    acc[token.name] = obfuscateToken(token.token);
    return acc;
  }, {} as Record<string, string>);

  return (
    <SettingsMain
      title="Tokens"
      subtitle="Manage your API tokens"
    >
      {AVAILABLE_TOKENS.map(token => (
        <ApiTokenEditor
          key={token.name}
          userId={user.id}
          title={token.title}
          name={token.name}
          description={token.description}
          defaultValue={apiTokenMap[token.name]}
        />
      ))}
    </SettingsMain>
  )
}
