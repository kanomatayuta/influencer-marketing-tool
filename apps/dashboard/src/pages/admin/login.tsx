import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthLayout, FormInput, ErrorMessage, SubmitButton } from '../../components/auth';
import { useErrorHandler } from '../../hooks/useErrorHandler';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { handleSuccess } = useErrorHandler();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('メールアドレスとパスワードを入力してください');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('パスワードは6文字以上で入力してください');
      setLoading(false);
      return;
    }

    try {
      const { login } = await import('../../services/api');
      const response = await login(email, password);

      // 管理者ロールをチェック
      if (response.user.role !== 'ADMIN') {
        setError('管理者アカウントでログインしてください');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));

      handleSuccess('ログインに成功しました');
      router.push('/admin/dashboard');
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError('メールアドレスまたはパスワードが間違っています');
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('ログインに失敗しました。もう一度お試しください');
      }
    } finally {
      setLoading(false);
    }
  };


  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">読み込み中...</p>
      </div>
    );
  }

  return (
    <AuthLayout title="管理者ログイン" subtitle="システム管理者アカウントでログイン">
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>注意：</strong> このページは管理者アカウント専用です。管理者の権限を持つアカウントでのみログインできます。
        </p>
      </div>

      <ErrorMessage message={error} />

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          label="メールアドレス"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@example.com"
          required
        />

        <FormInput
          label="パスワード"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワードを入力"
          required
          showPasswordToggle
        />

        <SubmitButton loading={loading} loadingText="ログイン中...">
          ログイン
        </SubmitButton>
      </form>

      <div className="mt-6 text-center text-sm">
        <Link
          href="/login"
          className="text-gray-600 hover:text-gray-700"
        >
          ← ユーザーログインに戻る
        </Link>
      </div>
    </AuthLayout>
  );
};

export default AdminLoginPage;
