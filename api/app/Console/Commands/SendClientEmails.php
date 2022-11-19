<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Client;

class SendClientEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:client_emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'It will send the list of client to the admin';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Starting...');

        $this->newLine();

        $this->table(
            ['Name', 'Email'],
            Client::all(['name', 'email'])->toArray()
        );

        return Command::SUCCESS;
    }
}
