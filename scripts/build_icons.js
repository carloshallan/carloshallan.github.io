const fs = require('fs');
const path = require('path');
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
            console.log(`${filePath}`);
            fs.access(filePath, fs.F_OK, (err) => {
                if (err) {
                    fs.readFile(filePath, {encoding:'UTF8'},(err, data) => {
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
                        fs.writeFile(`${iconsFolder}${basename}.vue`, vueComponent, 'UTF8', () => {
                            console.log(`${basename}.vue created as successfully!`)
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