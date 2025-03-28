import type { TechStackKey } from '~/constants/techStack';

export interface Project {
  title: [string, string];
  desc: string;
  techStack: TechStackKey[];
  image: string;
}

const projects: Readonly<Project[]> = [{
  title: ['苦力怕论坛问卷调查系统', 'KLPBBS|SURVEY'],
  desc: '为了让论坛用户能够更加简单、快速地填写问卷，苦力怕论坛 KLPBBS 与 瀚海工艺 Vastsea 团队的多位开发者共同合作，合力打造了一个无缝集成的问卷系统。通过这个系统，论坛用户可以使用已有的账号通过 KLPBBS API 快速登录，而无需重复注册或创建新的账号，极大优化了用户体验。',
  image: '/images/projects/klpbbs-wj.webp',
  techStack: ['nextjs', 'rust']
}, { // 以下内容为示例，实际项目信息请自行替换
  title: ['键盘命令', 'KeyCommand'],
  desc: 'Lorem ipsum dolor sit amet...',
  image: '/images/projects/klpbbs-wj.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['瀚海工艺官网', 'Vastsea Website'],
  desc: '瀚海工艺团队的官方网站，展示了团队的项目成果、技术博客以及团队文化。采用现代化的设计风格，结合流畅的动画效果，为访客提供优质的浏览体验。',
  image: '/images/projects/vastsea.webp',
  techStack: ['vue', 'typescript', 'nextjs']
}, {
  title: ['MC 启动器', 'MC Launcher'],
  desc: '一个现代化的 Minecraft 启动器，支持多版本管理、模组安装、资源包管理等功能。采用 Electron 和 Rust 开发，确保了高性能和良好的用户体验。',
  image: '/images/projects/launcher.webp',
  techStack: ['typescript', 'rust']
}, {
  title: ['在线代码编辑器', 'Online Code Editor'],
  desc: '基于 Web 的在线代码编辑器，支持多种编程语言的语法高亮和实时预览。集成了代码格式化、自动补全等功能，为开发者提供便捷的编码环境。',
  image: '/images/projects/editor.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['瀚海工艺博客', 'Vastsea Blog'],
  desc: '一个专注于技术分享和团队动态的博客平台，采用现代化的前端技术栈构建。支持 Markdown 编写，代码高亮，图片懒加载等特性，为读者提供流畅的阅读体验。',
  image: '/images/projects/blog.webp',
  techStack: ['vue', 'typescript', 'nextjs']
}, {
  title: ['资源管理系统', 'Resource Manager'],
  desc: '为团队开发的资源管理系统，用于管理项目素材、文档和其他数字资产。支持多人协作、版本控制和权限管理，提高团队工作效率。',
  image: '/images/projects/resource.webp',
  techStack: ['nextjs', 'rust']
}, {
  title: ['团队任务看板', 'Team Kanban'],
  desc: '一个轻量级的团队任务管理工具，支持任务拖拽排序、状态管理、截止日期提醒等功能。帮助团队更好地组织和追踪项目进度。',
  image: '/images/projects/kanban.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['团队任务看板', 'Team Kanban'],
  desc: '一个轻量级的团队任务管理工具，支持任务拖拽排序、状态管理、截止日期提醒等功能。帮助团队更好地组织和追踪项目进度。',
  image: '/images/projects/kanban.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['团队任务看板', 'Team Kanban'],
  desc: '一个轻量级的团队任务管理工具，支持任务拖拽排序、状态管理、截止日期提醒等功能。帮助团队更好地组织和追踪项目进度。',
  image: '/images/projects/kanban.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['团队任务看板', 'Team Kanban'],
  desc: '一个轻量级的团队任务管理工具，支持任务拖拽排序、状态管理、截止日期提醒等功能。帮助团队更好地组织和追踪项目进度。',
  image: '/images/projects/kanban.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['团队任务看板', 'Team Kanban'],
  desc: '一个轻量级的团队任务管理工具，支持任务拖拽排序、状态管理、截止日期提醒等功能。帮助团队更好地组织和追踪项目进度。',
  image: '/images/projects/kanban.webp',
  techStack: ['vue', 'typescript']
}, {
  title: ['团队任务看板', 'Team Kanban'],
  desc: '一个轻量级的团队任务管理工具，支持任务拖拽排序、状态管理、截止日期提醒等功能。帮助团队更好地组织和追踪项目进度。',
  image: '/images/projects/kanban.webp',
  techStack: ['vue', 'typescript']
}];

export const useProjects = () => projects;
