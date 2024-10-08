import { createSignal } from 'solid-js';
import {dealLabel} from '@/utils/dealLabel.ts';
import {formatDate} from '@/utils/formatDate.ts';
import {t} from '@/i18n/utils.ts';
import _ from 'lodash';

export function Search(props) {
  const [inputVal, setInputVal] = createSignal('')
  const [resultPosts, setResultPosts] = createSignal([])

  const handleChange = (e) => {
    setInputVal(e.target.value)
    if (e.target.value === '') {
      setResultPosts([])
    } else {
      const filterBlogs = props.posts.filter(post =>
        _.toString(post.data.title).toLowerCase().includes(inputVal().toLowerCase())
        || _.toString(post.data.description).toLowerCase().includes(inputVal().toLowerCase())
      )
      const cloneBlogs = _.cloneDeep(filterBlogs)
      const reg = new RegExp(e.target.value, 'gi')
      
      for (const blog of cloneBlogs) {
        blog.data.title = blog.data.title.replace(reg, (match) => {
          return `<span class="text-skin-active font-bold">${match}</span>`
        })
        if (blog.data.description) {
          blog.data.description = blog.data.description.replace(reg, (match) => {
            return `<span class="text-skin-active font-bold">${match}</span>`
          })
        } else {
          blog.data.description = ''
        }
      }
      setResultPosts(cloneBlogs)
    }
  }

  return (
    <div>
      <label class="relative block">
        <span class="absolute inset-y-0 flex items-center pl-2 opacity-75">
          <i class="ri-search-line text-skin-active ml-1" />
        </span>
        <input
          id="search-input"
          class="block w-full rounded border border-opacity-40 bg-skin-fill text-skin-base py-3 pl-10 pr-3 placeholder:italic placeholder:text-opacity-75 focus:border-skin-accent focus:outline-none"
          placeholder={t('search.placeholder')}
          type="text"
          name="search"
          value={inputVal()}
          onInput={handleChange}
          autofocus
        />
      </label>

      {
        resultPosts().length > 0 && 
          <div class="my-2">
            {t('search.searchLabelOne')}
            <span class="font-bold text-skin-active">{resultPosts().length}</span>
            {t('search.searchLabelTwo')}
          </div>
      }

      <div class="my-4">
        {resultPosts().map(post =>
          <>
            <a
              class="text-xl underline-offset-4 decoration-skin-base decoration-wavy hover:underline hover:decoration-sky-500 font-bold"
              href={'/posts/' + post.slug} innerHTML={post.data.title}>
            </a>
            <div class="flex items-center">
              {post.data.date ?
                <div class="flex items-center cursor-pointer">
                  <i class="ri-calendar-2-fill mr-1"/>
                  <div class="tag">{formatDate(post.data.date)}</div>
                </div> : ''}

              {dealLabel(post.data.category).filter(item => item !== 'uncategorized').map((categoryName, _) => (
                <div class="flex  items-center  cursor-pointer">
                  <div class="divider-vertical"/>
                  <i class="ri-folder-2-fill mr-1"/>
                  <a href={"/cat/" + categoryName}>{categoryName}</a>
                </div>
              ))}

              {dealLabel(post.data.tags).map((tagName, _) => (
                <div class="flex  items-center  cursor-pointer">
                  <div class="divider-vertical"/>
                  <i class="ri-price-tag-3-fill mr-1"/>
                  <a href={"/tags/" + tagName}>{tagName}</a>
                </div>
              ))}
            </div>
            <p class="break-all mb-4" innerHTML={post.data.description}></p>
          </>
        )}
      </div>
    </div>
  )
}
