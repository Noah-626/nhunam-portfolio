export interface Project {
    title: string;
    src: string;
    color: string;
    description: string;
    blogUrl: string;
  }
  
  export interface ModalState {
    active: boolean;
    index: number;
  }
  
  export interface ProjectProps {
    index: number;
    title: string;
    description: string;
    blogUrl: string;
    setModal: (state: ModalState) => void;
  }
  
  export interface ModalProps {
    modal: ModalState;
    projects: Project[];
  }