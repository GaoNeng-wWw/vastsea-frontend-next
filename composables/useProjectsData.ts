export interface Project {
  title: [string, string];
  desc: string;
  /**
   * @description 技术栈
   */
  techStack?: {
    title: string;
    color: string;
  }[];
  image: string;
  position?: 'top' | 'bottom';
}

const projects: Readonly<Project[]> = [{
  title: ['苦力怕论坛问卷调查系统', 'KLPBBS|SURVEY'],
  desc: '为了让论坛用户能够更加简单、快速地填写问卷，苦力怕论坛 KLPBBS 与 瀚海工艺 Vastsea 团队的多位开发者共同合作，合力打造了一个无缝集成的问卷系统。通过这个系统，论坛用户可以使用已有的账号通过 KLPBBS API 快速登录，而无需重复注册或创建新的账号，极大地优化了用户体验。',
  image: '/images/projects/klpbbs-wj.webp',
  techStack: [
    {
      title: 'Next.js',
      color: 'rgba(255, 87, 51, 1)',
    },
    {
      title: 'Rust',
      color: 'rgba(95, 77, 60, 1)',
    },
  ],
  position: 'bottom',
}, {
  title: ['键盘命令', 'KeyCommand'],
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed velit eget nisl consequat consectetur. Aenean rutrum elit sollicitudin lobortis mattis. ',
  image: '/images/projects/klpbbs-wj.webp',
  position: 'top',
  techStack: [
    {
      title: 'Next.js',
      color: 'rgba(255, 87, 51, 1)',
    },
    {
      title: 'Rust',
      color: 'rgba(95, 77, 60, 1)',
    },
  ],
}];

export const useProjects = () => projects;
