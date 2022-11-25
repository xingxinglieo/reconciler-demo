import React from 'react';
import './Home.scss';

export default function Index(): React.ReactElement {
  return (
    <div className="container">
      <main className="styles">
        <h1 className="title">
          Welcome to <a href="https://eden.bytedance.net/" target="_blank" rel="noopener noreferrer">Eden!</a>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">src/containers/Home/Home.tsx</code>
        </p>

        <div className="grid">
          <a href="https://eden-redirect.bytedance.net/redirect?id=eden-getting-started-cn" target="_blank" rel="noopener noreferrer" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Eden features and API.</p>
          </a>

          <a href="https://code.byted.org/ife/eden-set" target="_blank" rel="noopener noreferrer" className="card">
            <h3>GitLab &rarr;</h3>
            <p>Contributions in the form of pull requests are welcomed.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
