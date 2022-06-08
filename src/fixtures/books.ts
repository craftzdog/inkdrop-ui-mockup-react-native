import { Book } from '@/models'
import { LoremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const DATA: Array<Book> = []

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const capitalizeFirstLetter = ([first, ...rest]: string) =>
  first.toLocaleUpperCase() + rest.join('')

for (let i = 0; i < 100; ++i) {
  DATA.push({
    id: shortid.generate(),
    name: capitalizeFirstLetter(
      lorem.generateSentences(Math.round(Math.random() * 4))
    )
  })
}

export default DATA
