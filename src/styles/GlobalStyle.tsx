import cssnano from 'cssnano';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import * as sass from 'sass';

export async function loadCssFile() {
  const absolutePath = path.resolve(process.cwd(), './src/styles/styles.scss');

  const scssContent = fs.readFileSync(absolutePath, 'utf8');

  const result = await sass.compileStringAsync(scssContent, {
    loadPaths: [path.resolve(process.cwd(), './src/styles')],
  });

  // Минимизация CSS с помощью PostCSS и cssnano
  if (process.env.NODE_ENV === 'production') {
    const postcssResult = await postcss([cssnano]).process(result.css, { from: undefined });

    return postcssResult.css;
  }

  return result.css;
}

export const GlobalStyle = async () => (
  <style
    id="style"
    dangerouslySetInnerHTML={{
      __html: await loadCssFile(),
    }}
  />
);
