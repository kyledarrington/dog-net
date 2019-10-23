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
        postQuery: async (userId, page, type) => {
            console.log(userId)
            const query_result = await knex
                .select('post.id', 'post.content', 'post.date_posted as postDate', 'post_img.img_src as imgSrc', 'portrait_img.img_src as userImgSrc', 'user.first_name as userFirstName', 
                        'user.last_name as userLastName', 'user.id as userId')
                .from('posts as post')
                .innerJoin('users as user', 'user.id', 'post.user_id')
                .leftJoin('photos as post_img', 'post_img.id', 'post.photo_id')
                .leftJoin('photos as portrait_img', 'portrait_img.id', 'user.portrait_id')
                .modify((query) => {
                    switch(type){
                        case 'profile':
                            query.where('user.id', '=', userId)
                            break
                        case 'newsfeed':
                            query.where(knex.raw('post.user_id IN (SELECT following_id FROM follows WHERE follower_id = ' + userId + ')'))
                            break
                    }
                })
                .orderBy('postDate', 'desc')
                .limit(5)
                .offset(5 * (page - 1))
            return query_result
        },
        userQuery : async (userId) => {
            const query_result = await knex
                .select('user.id', 'first_name', 'last_name', 'email', 'portrait.img_src as portraitSrc')
                .from('users as user')
                .leftJoin('photos as portrait', 'portrait.id', 'user.portrait_id')
                .where('user.id', '=', userId)
            return query_result
        },
        userInsert: async user => {
            const result = await knex('users')
                .insert(user)
            return result
        },
        isFollowing : async (follower, following) =>{
            console.log(following + '; ' + follower)
            const params = {follower_id : follower, following_id: following}
            const result = await knex
                .select('id')
                .from('follows')
                .where(params)
                .limit(1)
            return (result.length > 0)
        },
        followInsert: async (follower, following) =>{
            const payload = {follower_id : follower, following_id: following}
            const result = await knex('follows')
                .insert(payload)
            return result
        },
        followDelete: async (follower, following) =>{
            return await knex('follows')
                .where({follower_id : follower, following_id : following})
                .del()
        }
    }
}