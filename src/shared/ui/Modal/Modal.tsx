import React, { useCallback, useEffect, useState } from 'react';
import { Modal as MUIModal, Box, Fade } from '@mui/material';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <MUIModal
            open={isOpen}
            onClose={closeHandler}
            className={className}
            closeAfterTransition
        >
            <Fade in={isOpen} timeout={ANIMATION_DELAY}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 1,
                        outline: 'none'
                    }}
                    onClick={onContentClick}
                >
                    {children}
                </Box>
            </Fade>
        </MUIModal>
    );
};
