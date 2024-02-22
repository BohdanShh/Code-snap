import { FontClasses, LanguagesClasses } from 'src/types';

export enum SearchParam {
  WIDTH = 'width',
  THEME = 'theme',
  BACKGROUND = 'background',
  DARK_MODE = 'darkMode',
  PADDING = 'padding',
  LANGUAGE = 'language',
  FONT = 'font',
  TITLE = 'title',
  CODE = 'code',
  FONT_SIZE = 'fontSize',
}

export const FONT_CLASSES: FontClasses = {
  hack: 'Hack',
  consolas: 'Consolas',
  cascadiaCode: 'Cascadia Code',
};

export const THEMES = {
  hyper: {
    text: 'Hyper',
    background: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    codeTheme: 'srcery',
  },
  oceanic: {
    text: 'Oceanic',
    background: 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600',
    codeTheme: 'material-darker',
  },
  cottonCandy: {
    text: 'Cotton Candy',
    background: 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400',
    codeTheme: 'chalk',
  },
  gotham: {
    text: 'Gotham',
    background: 'bg-gradient-to-br from-gray-700 via-gray-900 to-black',
    codeTheme: 'vulcan',
  },
  blueSteel: {
    text: 'Blue Steel',
    background: 'bg-gradient-to-br from-gray-400 via-gray-600 to-blue-800',
    codeTheme: 'zenburn',
  },
  hawaii: {
    text: 'Hawaii',
    background: 'bg-gradient-to-br from-green-300 via-yellow-300 to-pink-300',
    codeTheme: 'hybrid',
  },
  valentine: {
    text: 'Valentine',
    background: 'bg-gradient-to-br from-red-200 to-red-600',
    codeTheme: 'github-dark',
  },
  pumpkin: {
    text: 'Pumpkin',
    background: 'bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700',
    codeTheme: 'androidstudio',
  },
  powerPuff: {
    text: 'Power Puff',
    background: 'bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400',
    codeTheme: 'circus',
  },
  blueFlame: {
    text: 'Blue Flame',
    background: 'bg-gradient-to-br from-amber-200 via-violet-600 to-sky-900',
    codeTheme: 'ashes',
  },
};

export const LANGUAGE_CLASSES: LanguagesClasses = {
  bash: 'Bash',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  clojure: 'Clojure',
  crystal: 'Crystal',
  css: 'CSS',
  diff: 'Diff',
  dockerfile: 'Docker',
  elm: 'Elm',
  elixir: 'Elixir',
  erlang: 'Erlang',
  graphql: 'GraphQL',
  go: 'Go',
  haskell: 'Haskell',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript/JSX',
  json: 'JSON',
  kotlin: 'Kotlin',
  lisp: 'Lisp',
  lua: 'Lua',
  markdown: 'Markdown',
  matlab: 'MATLAB/Octave',
  pascal: 'Pascal',
  plaintext: 'Plaintext',
  powershell: 'Powershell',
  objectivec: 'Objective C',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  rust: 'Rust',
  scala: 'Scala',
  scss: 'SCS',
  sql: 'SQL',
  swift: 'Swift',
  toml: 'TOML',
  typescript: 'TypeScript/TSX',
  xml: 'XML',
  yaml: 'YAML',
};
