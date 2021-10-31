const fs = require('fs');
const path = require('path');
const execa = require('execa');
const mainFolder = "src/assets/";
const iconsFolder = "src/components/icons/";
const validExtensions = ['.svg'];

console.log(
    `// Converting svg files to vue component...`
)
fs.readdir(mainFolder, (err, files) => {
   if (err) throw new Error(err);
   console.log('Searching for files...');
   files.forEach((fileName) => {
       const filePath = `${mainFolder}${fileName}`;
       const extension = path.extname(filePath);
       const basename = path.basename(filePath, extension);

       if (validExtensions.includes(extension)) {
            console.log(`Checking ${filePath}...`);
            const output = `${iconsFolder}${basename}.vue`;

            fs.access(output, fs.F_OK, (err) => {
                if (err) {
                    fs.readFile(filePath, {encoding:'UTF8'},(err, data) => {
                        if (err) throw new Error(err);
                        const vueComponent = `
                            <template>
                                ${data}
                            </template>
                            <script lang="ts">
                            import { defineComponent } from "vue";
                        
                            export default defineComponent({
                                name: "${basename}"
                            });
                            </script>
                        `
                        try {
                        fs.writeFile(output, vueComponent, 'UTF8', () => {
                            console.log(`${output} created as successfully!`)
                            const { stdout } = execa('yarn', ['lint']);
                            execa('echo', ['vue-cli-service lint']).stdout.pipe(process.stdout);
                        });
                        } catch(err) {
                            console.error(err);
                        }
                    });
                    return
                }
              
                console.log(`${basename}.vue already exists!`);
              })
        }
   })
});