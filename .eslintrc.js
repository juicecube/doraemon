module.exports = {
  extends: './node_modules/@mlz/lint/ts-eslintrc-react.js',
  rules: {
    'react/no-deprecated': 0, // 不开启废弃方法检查，例如componentWillReceiveProps
    'react/no-children-prop': 0,
    '@typescript-eslint/no-empty-interface': 0, // 不开启空interface类型检查
    'react/sort-comp': 0, // 不开启组件内方法顺序检查
    'react/no-array-index-key': 0, // 允许index作为key值
    '@typescript-eslint/no-this-alias': 0, // 允许赋值this给变量
    'react-hooks/exhaustive-deps': 1, // useEffect不检查第二个参数的依赖
    '@typescript-eslint/camelcase': 0,
    'react/jsx-closing-tag-location': 0,
    'react/prop-types': 0,
    'react/no-multi-comp': 0, // 一个文件多个组件
    'react/display-name': 0,
    'import/no-default-export': 0,
    'prefer-template': 0, // value + ''
    '@typescript-eslint/no-unused-vars': 0, // 无用的变量
    'react-hooks/rules-of-hooks': 0,
    'import/order': 0,
  },
};
