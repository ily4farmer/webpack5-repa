import fs from 'fs';
import path from 'path';
import sass from 'sass';

export async function loadCssFile() {
  const absolutePath = path.resolve(process.cwd(), './src/styles/styles.scss');

  const scssContent = fs.readFileSync(absolutePath, 'utf8');

  const result = await sass.compileStringAsync(scssContent, {
    loadPaths: [path.resolve(process.cwd(), './src/styles')],
  });

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
