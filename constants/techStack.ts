import NextjsIcon from '~/components/icon/teckStacks/nextjs.vue';
import RustIcon from '~/components/icon/teckStacks/rust.vue';
import VueIcon from '~/components/icon/teckStacks/vue.vue';
import TypeScriptIcon from '~/components/icon/teckStacks/typescript.vue';

export interface TechStackItem {
  title: string;
  color: string;
  icon: Component;
}

export const techStackList: Record<string, TechStackItem> = {
  nextjs: {
    title: 'Next.js',
    color: 'rgba(255, 87, 51, 1)',
    icon: NextjsIcon
  },
  rust: {
    title: 'Rust',
    color: 'rgba(95, 77, 60, 1)',
    icon: RustIcon
  },
  vue: {
    title: 'Vue',
    color: '#42b883',
    icon: VueIcon
  },
  typescript: {
    title: 'TypeScript',
    color: '#3178c6',
    icon: TypeScriptIcon
  }
};

export type TechStackKey = keyof typeof techStackList;