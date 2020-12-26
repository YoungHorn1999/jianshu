import { createGlobalStyle } from 'styled-components'

export const GlobalStyleFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1609000056063'); /* IE9 */
    src: url('./iconfont.eot?t=1609000056063#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQoAAsAAAAACGgAAAPaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqECINZATYCJAMUCwwABCAFhG0HTxtkB8gehXEsLIRUr95OobBEQO33ukc/b+4HWTE6YBkVobitqzAVrvV1osYAajYiP//b/AMscR28Kl10yqKMi8PCh6xfxl926F50mwABYEeXpukUgToWi0vbXDq12qgAhgMUoNIKJf8gD1pA3v2HsQta4nkCqmmDYWdZBRVgJzOnBYRXrEoGdhml3JAZNIJWxdoM4R1Ya+Jk/ALeBr8f/tvKDkQlgTn3+j5TCSm/PF6WEqMso6DOwwGaTg+2iYQVIBNeVBpvEVFwBaGq8VYOgMYaFPnl+TzqZanFgigewqOMa1QVUR7+zwstMGWdkHwkzVeGHHSRCAqq5FGQTeJPqfA50guoMOU9gH9gUifJ4oU/GftcvRzs7DxFzj5tFQdN8PFGBVZRiXV/oUebpdJ0wihTKX3ILOVDx/3hbsz8WVox0GSqnNqdjGZOXT+6s5yHeSUvMZudSalDBakRVdfMCiIX+FTJ9oumAtRAHqlTLmGjaXp0sEdC5Y41MGqtaOpxDKNplYQeDftIZ82AikFl5Zze3jtWnPPzqp3nr/Km56/fvbNP5V7T4D8HqqvvSYyp+MQdOybiKSPNb6UctPr71+pgbfrSP2MyrZZOcyF+Wyen+v5cMj79+PHphMX1eO6+046fmI4nGwaYnJzm+oX7RT76nsZt3jwOiAlowMfhCc/nwq8FR5jsq/0zriInizzdrE4qrsTT5GxSt9WfJKNwMkaCWaeKuQFS1rFelJ8S97SBFs77ev7x6/OpTxD8c1hkwA9PjajBcGxSEbgUvdvd98WDydtz78wfuiugy9tH5LXd72VueM3SH+oW34mFWZ5FmRAD8Hw0HUmpAd6Ch/BoopoY/t//xtWY+Hijc8I3O5EVwE/H8e2w5HmUFaQ3AD8PdUZ/GXVsyhpmqkpW6h2BYio2Um6Rn4r93Sj97k9jHgKJPmg4ghB1mIKkMYPP5BUo2nagpXEI1bLszW0DeISQ7YEl4wEEvTZD1O0DJL0u4jP5HhTD3kFLbwRUN8F9z7a5WDKdRzIBKSl5B8UqOD1jawQyzCxDqhatjE9jAU2KeCProULFIflINtIjfooFxlZVmCAwFMNzOioLXIa0Wo4y8JwaKQRxsyAY4iQSpuqTxApOB6RTPERGgChR5DpQWAocPcbrLCALP18GUWmhJcM3NFQ5pRCeEds7JZRYSAd8tkzfqeFWBhu1UgkjEDB4EoPH0aFkQT2itYIciqF6lBqiIBBrHuA3iCNB7ZiuMvHyCt077oLKvKMEHCMwK8was4H82sDqSUamVyllatZz4Kkyh9sYMkTRjBQaVg8AAAA=') format('woff2'),
    url('./iconfont.woff?t=1609000056063') format('woff'),
    url('./iconfont.ttf?t=1609000056063') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1609000056063#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`