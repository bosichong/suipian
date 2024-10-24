// 站点导航组件
const SiteNav = ({siteDate}) =>{
    return(
    <nav class="sticky top-0 h-16 px-4 z-10 bg-opacity-90 backdrop-blur">
      <div class="container h-16 xl:w-3/5 mx-auto flex items-center">
        <div class="justify-start w-1/5">
          <div class="w-16 text-center text-2xl hover:animate-bounce">
            <a href="/" class="text-gray-300 transition hover:text-orange-500">碎片</a>
          </div>
        </div>
        <div class="justify-end w-4/5 flex">
          <ul class="flex text-center text-sm gap-6 list-none">
          <ul class="flex text-center text-sm gap-6 list-none">
            <li class="hover:animate-bounce">
              <a href="/tag" class="text-gray-300 transition hover:text-orange-500">
                Tags</a>
            </li>
            
            <li class="hover:animate-bounce">
              <a href="/about" class="text-gray-300 transition hover:text-orange-500">
              About</a>
            </li>
          </ul>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default SiteNav