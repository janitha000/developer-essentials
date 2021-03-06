## GetStaticProps

- use when ever possible
- create the pages only when requested if there are high number of dynamic props
- use revalidate if updates happens frequently
    - ravalidate : 1

## GetStaticPaths

/shop/[id]
- use when there is dynamic params
- fallback : false
    - all the path values specified will be built on build time. (not dynamically when only requested)
    - good when the dynamic values are small.
    - if user comes where no page- 404 will be returned
- fallback : true
    - then if the page is not yet created, it will be created at the request
    - afterwards will be served from the disk/cdn

    ```
    const Home = (props) => {
        if(router.isFallback) return <p1>Loading ... </p1>

        return <p1>Loaded</p1>   
    }
    ```

    - will have to wait until GetStaticProps gets executed
    - kind of like client side rendering with loaders

- fallback : blocking
    - nothing will be returned until GetStaticProps executed
    - no loaedrs needed
    - first visitor will have little delay

    ```
        export function getStaticPaths() {
            return {
                fallback: 'blocking',
                paths; []
            }
        }
    ```
    - this will run for every parameter (but only on first time)
    - use revalidate for refresh/update the content as needed

## Preview mode

- getStaticProps will be only called once in production
- If need this to be off we can use Preview mode (call again for new page in production)
    - use case : check preview after drafting a blog post
    - we can't make `revalidate : 1` since this will be too much calls
    - we can get the control on when the get the new page

- create api to enable preview mode
- this will store cookies on user browser to enable this 

```
export function enable-preview(req, res) {
    res.setPreviewData()
}
```
- once done remove the cookies from user browser
