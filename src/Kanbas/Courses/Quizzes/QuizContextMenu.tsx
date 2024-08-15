import React from 'react';

interface QuizContextMenuProps {
    onEdit: () => void;
    onDelete: () => void;
    onTogglePublish: () => void;
    isPublished: boolean;
}

const QuizContextMenu: React.FC<QuizContextMenuProps> = ({ onEdit, onDelete, onTogglePublish, isPublished }) => {
    return (
        <div style={{
            position: 'absolute',
            right: '0',
            top: '20px',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000
        }}>
            <button onClick={onEdit} style={menuButtonStyle}>Edit</button>
            <button onClick={onDelete} style={menuButtonStyle}>Delete</button>
            <button onClick={onTogglePublish} style={menuButtonStyle}>
                {isPublished ? 'Unpublish' : 'Publish'}
            </button>
        </div>
    );
}

const menuButtonStyle = {
    padding: '10px 20px',
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    borderBottom: '1px solid #ddd'
} as React.CSSProperties;

export default QuizContextMenu
