module.exports = {
    loginQuery: async (email, knex) => {
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
        const query_result = await knex
            .select('id')
            .from('posts as post')
            .innerJoin('users as user', 'user.id', 'post.user_id')
            .leftJoin('photos as post_img', 'post_img.id', 'post.photo_id')
            .leftJoin('photos as portrait_img', 'user.portrait_id')
            .raw('WHERE user.id IN (SELECT following_id FROM follows WHERE follower_id = :user.id)')
            .limit(5)
            .offset(5 * page)
        return query_result
    }
}