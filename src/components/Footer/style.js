import { css } from 'glamor';

export const footer = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  fontSize: '1.3em',
  justifyContent: 'space-around',
  paddingTop: '1rem',
});

export const link = css({
  color: 'rgba(45, 45, 45, 1)',
  fontSize: '1.2em',
  transition: 'all 400ms ease',
  ':hover': {
    textDecoration: 'none',
    color: 'rgba(45, 45, 45, 0.7)',
  },
  ':focus': {
    textDecoration: 'none',
    color: 'rgba(45, 45, 45, 0.7)',
  },
  ':active': {
    textDecoration: 'none',
    color: 'rgba(45, 45, 45, 0.7)',
  },
});
