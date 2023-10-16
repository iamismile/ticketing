import router from 'next/router';
import { useEffect } from 'react';
import { useRequest } from '../../hooks/use-request';

function SignoutPage() {
  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => router.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out..</div>;
}

export default SignoutPage;
