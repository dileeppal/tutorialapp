/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      createdAt
      name
      startDate
      endDate
      contents
      image
      updatedAt
      admin
      comments {
        items {
          id
          createdAt
          courseID
          content
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          like
          courseID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      createdAt
      name
      startDate
      endDate
      contents
      image
      updatedAt
      admin
      comments {
        items {
          id
          createdAt
          courseID
          content
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          like
          courseID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      createdAt
      name
      startDate
      endDate
      contents
      image
      updatedAt
      admin
      comments {
        items {
          id
          createdAt
          courseID
          content
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          createdAt
          like
          courseID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      createdAt
      courseID
      content
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      createdAt
      courseID
      content
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      createdAt
      courseID
      content
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      createdAt
      like
      courseID
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      createdAt
      like
      courseID
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      createdAt
      like
      courseID
      updatedAt
      course {
        id
        createdAt
        name
        startDate
        endDate
        contents
        image
        updatedAt
        admin
        comments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
      id
      createdAt
      name
      author
      image
      url
      updatedAt
      owner
      booklikes {
        items {
          id
          createdAt
          like
          bookID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
      id
      createdAt
      name
      author
      image
      url
      updatedAt
      owner
      booklikes {
        items {
          id
          createdAt
          like
          bookID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
      id
      createdAt
      name
      author
      image
      url
      updatedAt
      owner
      booklikes {
        items {
          id
          createdAt
          like
          bookID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateBookLike = /* GraphQL */ `
  subscription OnCreateBookLike {
    onCreateBookLike {
      id
      createdAt
      like
      bookID
      updatedAt
      book {
        id
        createdAt
        name
        author
        image
        url
        updatedAt
        owner
        booklikes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateBookLike = /* GraphQL */ `
  subscription OnUpdateBookLike {
    onUpdateBookLike {
      id
      createdAt
      like
      bookID
      updatedAt
      book {
        id
        createdAt
        name
        author
        image
        url
        updatedAt
        owner
        booklikes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteBookLike = /* GraphQL */ `
  subscription OnDeleteBookLike {
    onDeleteBookLike {
      id
      createdAt
      like
      bookID
      updatedAt
      book {
        id
        createdAt
        name
        author
        image
        url
        updatedAt
        owner
        booklikes {
          nextToken
        }
      }
      owner
    }
  }
`;
