export async function getUserWithAwait(user) {
    const userResponse = await fetch(`https://api.github.com/users/${user}`);
    return await userResponse.json();
}

export async function wrapper(user) {
    const results = await  getUserWithAwait(user);
    console.log('results', results);
    return results;
}