FROM fastro/deno:1.7.4
WORKDIR /app
USER deno
COPY . ./
RUN deno cache https://deno.land/x/fastro@v0.30.44/mod.ts \
    && deno cache https://deno.land/x/fastro@v0.30.44/deps.ts \
    && deno cache main.ts \
    && deno cache services/hello.controller.ts \
    && deno cache middleware/support.ts
CMD ["run", "-A", "--no-check", "main.ts"]
