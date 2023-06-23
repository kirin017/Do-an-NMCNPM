import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
const mainFeaturedPost = {
    title: 'SUMMER ESSENTIALS',
    description:
        "Get after summer’s endless possibilities with ready-for-anything fits. ",
    image: 'https://sneakercommunityvietnam.com/wp-content/uploads/2020/09/77777777-1855x2048.jpg',
    imgText: 'main image description',
};

const featuredPosts = [
    {
        title: 'TRENDING',
        date: 'June 20',
        description:
            'Enjoy the sun without getting cooked in this versatile button-down.',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc519f24-97e9-4a16-8b6a-670f0b759d7f/sportswear-tech-pack-woven-long-sleeve-shirt-47rHn4.png',
        imageText: 'Image Text',
        link: '/product/20'
    },
    {
        title: 'TRENDING',
        date: 'May 18',
        description:
            'Designed for running, training and yoga, our sweat-wicking Challenger Shorts keep it light and breathable',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74d9ef75-30ed-4b2d-9cb7-acd98e5667aa/dri-fit-challenger-18cm-brief-lined-versatile-shorts-DBSws6.png',
        imageText: 'Image Text',
        link: '/product/40'
    },
];
const Post = () => {
    return (
        <>
            
            <React.Fragment >
                <CssBaseline />
                <Container maxWidth="lg" style = {{marginTop : '200px'}}>
                    <main>
                        <MainFeaturedPost post={mainFeaturedPost} />
                        <Grid container spacing={4}>
                            {featuredPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} />
                            ))}
                        </Grid>
                    </main>
                </Container>
            </React.Fragment>
        </>

    );
};

export default Post;