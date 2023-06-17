import { ColumnProps } from "../typing/index";
import { PostProps } from "../typing";

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    descriptions: "这是test1专栏，有一段非常有意思的简介，可以更新一下哦",
    avatar:
      "https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png",
  },
  {
    id: 2,
    title: "test2的专栏",
    descriptions: "这是test2专栏，有一段非常有意思的简介，可以更新一下哦",
    avatar:
      "https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png",
  },
  {
    id: 3,
    title: "test1的专栏",
    descriptions: "这是test3专栏，有一段非常有意思的简介，可以更新一下哦",
    avatar:
      "https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png",
  },
  {
    id: 4,
    title: "test2的专栏",
    descriptions: "这是test4专栏，有一段非常有意思的简介，可以更新一下哦",
    // avator: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png'
    avatar: "",
  },
];

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: "这是我的第一篇文章",
    content: 'this is a new post you Very often we will need to map router',
    image: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png',
    createAt: '2020-06-11 10:42:33',
    columnId: 1
  },
  {
    id: 2,
    title: "这是我的第二篇文章",
    content: 'this is a new post you Very often we will need to map router',
    image: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png',
    createAt: '2020-06-11 11:42:33',
    columnId: 1
  },
  {
    id: 3,
    title: "这是我的第三篇文章",
    content: 'this is a new post you Very often we will need to map router',
    image: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png',
    createAt: '2020-06-11 12:42:33',
    columnId: 2
  },
  {
    id: 4,
    title: "这是我的第四篇文章",
    content: 'this is a new post you Very often we will need to map router',
    image: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png',
    createAt: '2020-06-11 13:42:33',
    columnId: 2
  }
]
export default {
  testData,
  testPosts
}
