module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
            region: env('AWS_DEFAULT_REGION'),
            forcePathStyle: false,
          },
          params: {
            Bucket: env('AWS_BUCKET'),
          },
          // Deshabilitar ACLs explícitamente
          actionOptions: {
            upload: {
              ACL: undefined, // Forzar sin ACL
            },
            uploadStream: {
              ACL: undefined,
            },
          },
        },
      },
    },
    graphql: {
      enabled: true,
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
      },
    },
  };
};