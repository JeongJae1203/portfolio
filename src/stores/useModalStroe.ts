import { create } from 'zustand';
import type { ProjectProps } from '../types/type';

interface OpenModalProps {
  isOpen: boolean;
  projectData: ProjectProps | null;
  openModal: (projectData: ProjectProps) => void;
  closeModal: () => void;
}

/**
 * 모달 오픈 상태 관리
 * @returns {OpenModalProps}
 */
export const useOpenModal = create<OpenModalProps>((set) => ({
  isOpen: false,
  projectData: null,
  openModal: (projectData: ProjectProps) => set({ isOpen: true, projectData }),
  closeModal: () => set({ isOpen: false, projectData: null }),
}));