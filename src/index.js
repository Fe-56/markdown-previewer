import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MarkdownPreviewer from './MarkdownPreviewer';

const root = ReactDOM.createRoot(document.getElementById('markdown-previewer'));
root.render(
    <MarkdownPreviewer />
);
