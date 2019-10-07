module.exports = function(knex) {
    return {
        loginQuery: async (email) => {
            if(!email){
                console.error('No Email Supplied')
                return null
            }
            const query_result = await knex
                .select('u.id', 'u.password_hash', 'u.email', 'u.first_name', 'u.last_name', 'p.img_src as portraitSrc')
                .leftJoin('photos as p', 'p.id', 'u.portrait_id')
                .from('users as u')
                .where('u.email', '=', email)
            if (query_result) return query_result[0]
            else return null
        },
        newsfeedQuery: async (userId, page) => {
            console.log(userId)
            const query_result = await knex
                .select('post.id', 'post.content', 'post.date_posted as postDate', 'post_img.img_src as imgSrc', 'portrait_img.img_src as userImgSrc', 'user.first_name as userFirstName', 
                        'user.last_name as userLastName')
                .from('posts as post')
                .innerJoin('users as user', 'user.id', 'post.user_id')
                .leftJoin('photos as post_img', 'post_img.id', 'post.photo_id')
                .leftJoin('photos as portrait_img', 'portrait_img.id', 'user.portrait_id')
                .where(knex.raw('post.user_id IN (SELECT following_id FROM follows WHERE follower_id = ' + userId + ')'))
                .orderBy('postDate', 'desc')
                .limit(5)
                .offset(5 * (page - 1))
            console.log(query_result)
            return query_result
        }
    }
}