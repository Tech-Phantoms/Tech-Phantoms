import { useRouter } from 'next/router';
import { useContext, useState } from 'react'
import BlogContext from '../../context/BlogContext'

export default function BlogIndexPage() {
    const router = useRouter()
    const { navItems } = useContext(BlogContext)
    const [posts, setPosts] = useState(
        navItems.sort((i1, i2) => {
            const i1Date: any = new Date(i1.date);
            const i2Date: any = new Date(i2.date);

            if (i1.featured && !i2.featured) return -1;
            if (!i1.featured && i2.featured) return 1;
            return i2Date - i1Date;
        })
    )


    return <div>
        <h1>Blogs Index Page</h1>
    </div>
}