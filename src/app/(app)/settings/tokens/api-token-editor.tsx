'use client'

import { FC, useState } from 'react';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Edit, X, AlertTriangle } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '~/components/ui/alert-dialog';
import { deleteUserApiToken, upsertUserApiToken } from '~/actions';

type TokenStatus = 'default' | 'editing' | 'saving' | 'deleting' | 'error';

export const ApiTokenEditor: FC<{
  userId: string;
  name: string;
  title: string;
  description?: string;
  defaultValue?: string;
}> = ({
  userId,
  title,
  name,
  description,
  defaultValue,
}) => {
  const [tokenStatus, setTokenStatus] = useState<TokenStatus>('default');
  const [token, setToken] = useState<string | null>(defaultValue || null);
  const [newToken, setNewToken] = useState('');

  const onDeleteClick = async () => {
    setTokenStatus('deleting');

    // Delete the token from the database
    await deleteUserApiToken(userId, name);

    setToken(null);
    setNewToken('');
    setTokenStatus('default');
  }

  const onSaveClick = async () => {
    setTokenStatus('saving');

    // Save the token to the database
    const obfuscatedToken = await upsertUserApiToken(userId, name, newToken);

    setToken(obfuscatedToken);
    setNewToken('');
    setTokenStatus('default');
  }

  return (
    <Card>
      <CardHeader className="flex-row justify-between">
        <div>
          {title}
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex">
          <Input
            className="w-[400px] mr-2"
            type="text"
            name={name}
            placeholder={token || 'None'}
            disabled={tokenStatus !== 'editing'}
            value={token || ''}
            onChange={e => setToken(e.target.value)}
          />
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setTokenStatus(tokenStatus === 'editing' ? 'default' : 'editing')}
          >
            {tokenStatus === 'editing' ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>
      <AlertDialog open={tokenStatus != 'default'}>
        <AlertDialogContent className="flex flex-col">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {title}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div>
            <Input
              className="w-full"
              type="text"
              name={name}
              placeholder="New Token"
              disabled={tokenStatus !== 'editing'}
              value={newToken}
              onChange={e => setNewToken(e.target.value)}
            />
            {token && (
              <p className="flex items-center text-xs text-muted-foreground mt-2 text-orange-500">
                <AlertTriangle className="w-3.5 h-3.5 mr-1.5"/> This will overwrite the existing token
              </p>
            )}
          </div>
          <div className="flex justify-between">
            <Button
              variant="destructive"
              onClick={onDeleteClick}
              disabled={!token}
            >
              Delete Token
            </Button>
            <div>
              <Button
                className="mr-2"
                variant="secondary"
                onClick={() => setTokenStatus('default')}
              >
                Cancel
              </Button>
              <Button
                onClick={onSaveClick}
              >
                Save Token
              </Button>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}
