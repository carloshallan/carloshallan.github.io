import fs from 'node:fs'
import path from 'node:path'
import { execa } from 'execa'
const mainFolder = 'src/assets/'
const iconsFolder = 'src/components/icons/'
const validExtensions = ['.svg']

function runLint() {
  execa('echo', ['npm run lint']).stdout.pipe(process.stdout)
}

console.log(`// Converting svg files to vue component...`)

fs.readdir(mainFolder, (err, files) => {
  if (err) throw new Error(err)
  const promises = []
  console.log('Searching for files...')
  files.forEach(fileName => {
    const filePath = `${mainFolder}${fileName}`
    const extension = path.extname(filePath)
    const basename = path.basename(filePath, extension)

    if (validExtensions.includes(extension)) {
      console.log(`Checking ${filePath}...`)
      const output = `${iconsFolder}${basename}.vue`

      fs.access(output, fs.constants.F_OK, err => {
        if (err) {
          promises.push(
            fs.readFile(filePath, { encoding: 'UTF8' }, (err, data) => {
              if (err) throw new Error(err)
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
                })
              } catch (err) {
                console.error(err)
              }
            })
          )

          return
        }

        console.log(`${basename}.vue already exists!`)
      })
    }
  })
  runLint()
})
