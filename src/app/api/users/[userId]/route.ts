import data from '../data.json';


export async function GET(request: Request, context: any) {
    const { userId } = context.params;
    const user = data.find((user: any) => user.id === userId);

    if (user) {
        console.log('user found');
    }

    console.log('user not found');
}
