module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb/whitespace'],
  rules: {
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
